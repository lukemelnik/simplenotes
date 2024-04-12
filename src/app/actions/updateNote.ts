/** @format */

"use server";

import db from "@/db";
import { redirect } from "next/navigation";

export default async function createNote(id: number, formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  const updateNote = await db.note.update({
    where: { id },
    data: {
      title,
      content,
    },
  });
  redirect("/");
}
