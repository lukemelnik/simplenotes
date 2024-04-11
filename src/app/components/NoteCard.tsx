/** @format */

"use client";

import React from "react";
import deleteNote from "../actions/deleteNote";
import { redirect } from "next/navigation";
import editNote from "../actions/editNote";

type NoteProps = {
  note: {
    id: number;
    title: string;
    content: string;
  };
};

export default function NoteCard({ note }: NoteProps) {
  return (
    <div
      key={note.id}
      className="bg-gray-300 text-gray-800 rounded-xl p-8 relative"
    >
      <button
        onClick={() => deleteNote(note.id)}
        className="text-xl font-bold absolute right-5 top-5 hover:text-red-600"
      >
        X
      </button>
      <h3 className="font-bold text-lg">{note.title}</h3>
      <p className="mb-5">{note.content}</p>
      <button
        className="absolute right-5 bottom-5 bg-gray-950 text-gray-300 px-3 py-1 rounded"
        onClick={async () => editNote(note.id)}
      >
        Edit
      </button>
    </div>
  );
}
