"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { User } from "lucide-react";
import Image from "next/image";
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/lib/constants";

const formSchema = z.object({
  picture: z
    .instanceof(FileList, { message: "Picture is required" })
    .refine((files) => files?.length === 1, "Picture is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      "Max file size is 23MB."
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
});

const UpdatePictureForm = ({ className }: { className?: string }) => {
  const [preview, setPreview] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  // Handle file preview
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);

      // Clean up the URL when component unmounts
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreview(null);
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn("space-y-8 px-2", className)}
        >
          <FormField
            control={form.control}
            name="picture"
            render={({ field: { onChange, value, ...field } }) => (
              <div className="flex items-center gap-4">
                <div className="size-32 rounded-xl overflow-hidden">
                  {preview && value ? (
                    <Image
                      src={preview}
                      alt="Preview"
                      className="object-cover size-full"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  ) : (
                    <div className="bg-gray-200 object-cover size-full">
                      <User className="stroke-gray-400 size-full" />
                    </div>
                  )}
                </div>
                <FormItem>
                  <FormLabel className="">Please upload your picture</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept={ACCEPTED_IMAGE_TYPES.join(",")}
                      onChange={(e) => {
                        onChange(e.target.files);
                        handleFileChange(e);
                      }}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Must be not more than 23MB. Supported formats: JPG, PNG,
                    WebP
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />

          <Button
            className="w-full font-bold rounded-xl rounded-br-none"
            type="submit"
          >
            Update
          </Button>
        </form>
      </Form>
    </>
  );
};

export default UpdatePictureForm;
