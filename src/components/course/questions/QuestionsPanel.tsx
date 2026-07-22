"use client";

import { useMemo, useState } from "react";
import type { Difficulty } from "@/lib/questions";
import { questionTopics } from "@/lib/questions";
import EmptyState from "@/components/common/EmptyState";
import QuestionsStatsRow from "./QuestionsStatsRow";
import QuestionsControlsBar from "./QuestionsControlsBar";
import QuestionTopicCard from "./QuestionTopicCard";

export default function QuestionsPanel() {
  const [query, setQuery] = useState("");
  const [activeDifficulties, setActiveDifficulties] = useState<Set<Difficulty>>(
    () => new Set()
  );

  function toggleDifficulty(difficulty: Difficulty) {
    setActiveDifficulties((prev) => {
      const next = new Set(prev);
      if (next.has(difficulty)) next.delete(difficulty);
      else next.add(difficulty);
      return next;
    });
  }

  const filteredTopics = useMemo(() => {
    const q = query.trim().toLowerCase();
    return questionTopics.filter((topic) => {
      const matchesQuery = q.length === 0 || topic.title.toLowerCase().includes(q);
      const matchesDifficulty =
        activeDifficulties.size === 0 || activeDifficulties.has(topic.difficulty);
      return matchesQuery && matchesDifficulty;
    });
  }, [query, activeDifficulties]);

  return (
    <div className="mt-5">
      <QuestionsStatsRow />

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-[15px] font-bold text-[#181826]">Question bank</h2>
        <QuestionsControlsBar
          query={query}
          onQueryChange={setQuery}
          activeDifficulties={activeDifficulties}
          onToggleDifficulty={toggleDifficulty}
          onClearDifficulties={() => setActiveDifficulties(new Set())}
        />
      </div>

      {filteredTopics.length === 0 ? (
        <EmptyState message="No topics match your search. Try a different keyword or clear filters." />
      ) : (
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTopics.map((topic) => (
            <QuestionTopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      )}
    </div>
  );
}
