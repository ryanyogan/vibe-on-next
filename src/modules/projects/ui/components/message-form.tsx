"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Form, FormField } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { ArrowUpIcon, Loader2Icon } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  value: z.string().min(1).max(10_000),
});

export function MessageForm({ projectId }: { projectId: string }) {
  const trpc = useTRPC();
  const [isFocused, setIsFocused] = useState(false);
  const showUsage = false;
  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      value: "",
    },
  });

  const createMessage = useMutation(
    trpc.messages.create.mutationOptions({
      onSuccess: () => {
        form.reset();

        queryClient.invalidateQueries(
          trpc.messages.getMany.queryOptions({ projectId }),
        );

        // TODO: Invalidate useage status
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }),
  );

  const isPending = createMessage.isPending;
  const isDisabled = isPending || !form.formState.isValid;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await createMessage.mutateAsync({
      value: values.value,
      projectId,
    });
  }

  return (
    <Form {...form}>
      <form
        className={cn(
          "relative border p-4 pt-1 rounded-xl bg-sidebar dark:bg-sidebar transition-all",
          isFocused && "shadow-xs",
          showUsage && "rounded-t-none",
        )}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <TextareaAutosize
              {...field}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              minRows={2}
              maxRows={8}
              disabled={isPending}
              className="pt-4 border-none resize-none w-full outline-none bg-transparent"
              placeholder="What are we building?!"
              onKeyDown={(e) => {
                if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
                  e.preventDefault();
                  form.handleSubmit(onSubmit)(e);
                }
              }}
            />
          )}
        />
        <div className="flex gap-x-2 items-end justify-between pt-2">
          <div className="text-[10px] text-muted-foreground font-mono">
            <kbd
              className="ml-auto pointer-events-none inline-flex h-5 select-none items-center
              gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground"
            >
              <span>&#8984;</span>Enter
            </kbd>
            &nbsp;to submit
          </div>

          <Button
            disabled={isDisabled}
            className={cn(
              "size-8 rounded-full",
              isDisabled && "bg-muted-foreground border",
            )}
          >
            {isPending ? (
              <Loader2Icon className="size-4 animate-spin" />
            ) : (
              <ArrowUpIcon />
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
