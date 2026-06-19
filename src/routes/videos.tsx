import { createFileRoute } from "@tanstack/react-router";
import { VideoSection } from "@/components/site/VideoSection";

export const Route = createFileRoute("/videos")({
  component: VideosPage,
});

function VideosPage() {
  return <VideoSection />;
}