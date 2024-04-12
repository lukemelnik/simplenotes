/** @format */
"use client";

import React, { use, useRef } from "react";
import createNote from "../actions/createNote";
import Button from "./Button";
import updateNote from "../actions/updateNote";

type NoteProps = {
  note: {
    id: number;
    title: string;
    content: string;
  };
};

export default function NewNoteForm({ note }: NoteProps) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      action={async (formData) => {
        if (note) {
          await updateNote(note.id, formData);
        } else {
          await createNote(formData);
        }
        formRef?.current.reset();
      }}
      className="flex flex-col gap-2"
      ref={formRef}
    >
      <h3 className="text-3xl font-bold">Add a note:</h3>
      <label htmlFor="title">Title</label>
      <input
        className="text-gray-950 rounded p-2"
        type="text"
        name="title"
        placeholder={note ? note.title : ""}
      />
      <label htmlFor="content">Content</label>
      <input
        className="text-gray-950 rounded p-2"
        type="text"
        name="content"
        placeholder={note ? note.content : ""}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
