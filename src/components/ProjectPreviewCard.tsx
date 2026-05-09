import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
};

export default function ProjectPreviewCard({ title }: Props) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/portfolio")}
      className="group cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
    >
      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400">
        {title}
      </h3>
    </div>
  );
}