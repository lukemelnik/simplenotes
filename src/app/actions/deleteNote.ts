/** @format */

"use server";

import db from "@/db";

export default async function deleteNote(id: number) {
  await db.note.delete({
    where: {
      id,
    },
  });
}
