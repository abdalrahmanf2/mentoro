"use client";
import { Content, Course } from "@/lib/types";
import { File, FileQuestion, Link2, Trash } from "lucide-react";
import { useCallback, useState } from "react";

const Content = ({ course }: { course: Course }) => {
  const [content, setContent] = useState<Content[]>(course.content);

  const deleteItem = useCallback((idx: number) => {
    const updatedContent = content.filter((_, i) => i !== idx);
    setContent(updatedContent);
  });

  return (
    <div className="space-y-2">
      <h2 className="text-3xl font-extrabold text-brand-200">Content</h2>
      <div className="relative p-4 border rounded-xl bg-slate-100 h-[16rem] overflow-y-scroll">
        <ul className="flex flex-col gap-4">
          {content.map((item, idx) => {
            const ItemIcon = getContentItemIcon(item.type);

            return (
              <li key={idx} className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <ItemIcon />
                  {item.name}
                </div>
                <div className="p-2 rounded-full hover:bg-red-200 cursor-pointer transition">
                  <Trash
                    onClick={() => deleteItem(idx)}
                    className="stroke-red-400"
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const getContentItemIcon = (type: string) => {
  switch (type) {
    case "file":
      return File;
    case "link":
      return Link2;
    default:
      return FileQuestion;
  }
};

export default Content;
