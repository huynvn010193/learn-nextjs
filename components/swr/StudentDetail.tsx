import * as React from "react";
import useSWR from "swr";

export interface StudentDetailProps {
  studentId: string;
}

export function StudentDetail({ studentId }: StudentDetailProps) {
  const { data, error, mutate, isValidating } = useSWR(
    `/students/${studentId}`,
    {
      revalidateOnFocus: false,
    }
  );

  function handleMutateClick() {
    mutate({ name: "easy frontend" }, false);
  }

  return (
    <div>
      Name: {data?.name || "--"}{" "}
      <button onClick={handleMutateClick}>mutate</button>
    </div>
  );
}
