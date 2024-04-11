/** @format */

"use server";

import db from "@/db";
import { redirect } from "next/navigation";

export default async function deleteNote(id: number) {
  const deleteNote = await db.note.delete({
    where: {
      id,
    },
  });
  redirect("/");
}
