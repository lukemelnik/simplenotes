/** @format */

"use server";

import db from "@/db";
import { redirect } from "next/navigation";

export default async function createNote(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  const newNote = await db.note.create({
    data: {
      title,
      content,
    },
  });
  redirect("/");
}
