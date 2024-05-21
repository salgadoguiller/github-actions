export type TimelineItem = {
  id: number;
  time: string;
  title: string;
  description: string[];
  footer: TimelineFooter;
};

type TimelineFooter = {
  image: string;
  description: string;
}
