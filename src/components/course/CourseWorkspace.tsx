"use client";

import { useState } from "react";
import type { CourseTabId } from "./CourseTabNav";
import CourseTabNav from "./CourseTabNav";
import LessonBreadcrumb from "./LessonBreadcrumb";
import VideoPlayer from "./VideoPlayer";
import LessonActions from "./LessonActions";
import LessonTabs from "./LessonTabs";
import CourseCompletionCard from "./CourseCompletionCard";
import TutorialList from "./TutorialList";
import MyProgressPanel from "./progress/MyProgressPanel";
import QuestionsPanel from "./questions/QuestionsPanel";
import MockExamsPanel from "./mockexams/MockExamsPanel";
import { courseCompletion, tutorials } from "@/lib/tutorial";

export default function CourseWorkspace() {
  const [activeTab, setActiveTab] = useState<CourseTabId>("tutorials");
  const activeLesson = tutorials.find((t) => t.id === "verbal-reasoning")!;

  return (
    <div>
      <CourseTabNav active={activeTab} onChange={setActiveTab} />

      {activeTab === "progress" && <MyProgressPanel />}

      {activeTab === "questions" && <QuestionsPanel />}

      {activeTab === "tutorials" && (
        <>
          <div className="mt-5">
            <LessonBreadcrumb section="Tutorials" lesson={activeLesson.title} />
          </div>

          <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
            <div>
              <VideoPlayer />
              <LessonActions title={activeLesson.title} />
              <LessonTabs />
            </div>

            <div>
              <CourseCompletionCard
                watched={courseCompletion.watched}
                total={courseCompletion.total}
                percent={courseCompletion.percent}
                studentName="Minhas"
              />
              <TutorialList items={tutorials} activeId={activeLesson.id} />
            </div>
          </div>
        </>
      )}

      {activeTab === "mockexams" && <MockExamsPanel />}
    </div>
  );
}
