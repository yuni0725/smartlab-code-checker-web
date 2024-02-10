import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

export interface ProblemTableType {
  difficulty: string;
  fileId: string;
  lang: string;
  problemNum: number;
}

export default function ProblemTable() {
  const [problemTable, setProblemTable] = useState<ProblemTableType[]>([]);
  const getProblem = async () => {
    const problemQuery = query(collection(db, "problem"));
    const snapshot = await getDocs(problemQuery);
    const problems = snapshot.docs.map((doc) => {
      const { difficulty, fileId, lang, problemNum } = doc.data();
      return { difficulty, fileId, lang, problemNum };
    });
    setProblemTable(problems);
  };

  useEffect(() => {
    getProblem();
  }, []);
  return <h1>{JSON.stringify(problemTable)}</h1>;
}
