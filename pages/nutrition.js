import useSwr from "swr";
import { fetcher } from "../utils";

export default function NutritionPage() {
  const { data, error } = useSwr("/api/nutrition", fetcher);
  return <div>nutrition</div>;
}
