"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button, buttonVariants } from "@/components/ui/button";
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
import { Checkbox } from "./ui/checkbox";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { User } from "lucide-react";
import Image from "next/image";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  ACCEPTED_DOC_TYPES,
  ACCEPTED_IMAGE_TYPES,
  ACCEPTED_VIDEO_TYPES,
  CATEGORIES,
  MAX_FILE_SIZE,
} from "@/lib/constants";

// Update the schema to handle File type

const formSchema = z
  .object({
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
    firstName: z.string().min(2, { message: "First name is required" }),
    lastName: z.string().min(2, { message: "Last name is required" }),
    email: z.string().email({ message: "Invalid email address." }),
    password: z
      .string()
      .min(8, { message: "Password must be atleast 8 characters" })
      .max(20, { message: "Password must not exceed 20 characters" })
      .regex(/^(?=.*[A-Z]).*$/, {
        message: "Password must contain 1 Uppercase letter atleast",
      })
      .regex(/^(?=.*[!@#$%^&*(),.?":{}|<>~`_\-+=\\/[\]]).*$/, {
        message: "Password must contain 1 special character atleast",
      }),
    agreeTOS: z.boolean().refine((data) => data),
    confirmPassword: z
      .string()
      .min(6, { message: "Confirm password must match password." }),
    location: z.string().min(2, { message: "Location is required" }),
    jobTitle: z.string().min(2, { message: "Job Title is required" }),
    category: z.string().min(2, { message: "Category is required" }),
    cv: z
      .instanceof(FileList, { message: "CV is required" })
      .refine((files) => files?.length === 1, "CV is required.")
      .refine(
        (files) => files?.[0]?.size <= MAX_FILE_SIZE,
        "Max file size is 23MB."
      )
      .refine(
        (files) => ACCEPTED_DOC_TYPES.includes(files?.[0]?.type),
        "Only .pdf format is supported."
      ),
    video: z
      .instanceof(FileList, { message: "Video is required" })
      .refine((files) => files?.length === 1, "A Video is required.")
      .refine(
        (files) => files?.[0]?.size <= MAX_FILE_SIZE,
        "Max file size is 23MB."
      )
      .refine(
        (files) => ACCEPTED_VIDEO_TYPES.includes(files?.[0]?.type),
        "Only .mp4 format is supported."
      ),
    about: z.string().optional(),
    linkedIn: z.string().min(2, { message: "Linkedin is required" }),
    github: z.string().min(2, { message: "Github is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
  });

const MentorForm = ({ className }: { className?: string }) => {
  const [preview, setPreview] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      location: "",
      category: "",
      agreeTOS: false,
      about: "",
      linkedIn: "",
      github: "",
    },
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
          <div className="flex justify-center gap-8">
            <h2 className="text-2xl font-extrabold">
              Appreciate your guidance!
            </h2>
          </div>
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
          <div className="grid grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Last Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Location" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {CATEGORIES.map((category) => (
                      <SelectItem key={category.name} value={category.name}>
                        <category.Icon className="inline mb-1 mr-2 size-4" />
                        <span>{category.name}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cv"
            render={({ field: { onChange, value, ...field } }) => (
              <FormItem>
                <FormLabel className="">Upload your CV</FormLabel>
                {value && false}
                <FormControl>
                  <Input
                    type="file"
                    accept={ACCEPTED_DOC_TYPES.join(",")}
                    onChange={(e) => {
                      onChange(e.target.files);
                    }}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Must be not more than 23MB. Supported formats: pdf
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="video"
            render={({ field: { onChange, value, ...field } }) => (
              <FormItem>
                <FormLabel className="">Upload Video</FormLabel>
                {value && false}
                <FormControl>
                  <Input
                    type="file"
                    accept={ACCEPTED_VIDEO_TYPES.join(",")}
                    onChange={(e) => {
                      onChange(e.target.files);
                    }}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Please upload your 5-minute video introducing yourself
                  explaining your mentoring approach, outlining your overall
                  plan, and how you&apos;ll create personalized roadmaps for
                  mentees.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="about"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Info</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about yourself (optional)"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="linkedIn"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Linkedin" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="github"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Github" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <FormField
              control={form.control}
              name="agreeTOS"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Accept terms and conditions</FormLabel>
                    <FormDescription>
                      You agree to our Terms of Service and Privacy Policy.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <Link
              href="#"
              className={cn(
                buttonVariants({ variant: "link" }),
                "text-muted-foreground"
              )}
            >
              Forgot Password?
            </Link>
          </div>
          <Button
            className="w-full font-bold rounded-xl rounded-br-none"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

export default MentorForm;
