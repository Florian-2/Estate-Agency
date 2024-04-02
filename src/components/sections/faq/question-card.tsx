import { Link } from "@/components/navigation";
import { Question } from "@/data/questions";

type Props = {
    question: Question;
};

export function QuestionCard({ question }: Props) {
    return (
        <article className="space-y-5 rounded-xl border p-5 lg:p-6">
            <h4 className="line-clamp-2 h-7 text-lg lg:h-14 lg:text-xl">{question.question}</h4>
            <p className="line-clamp-2 h-12">{question.resume}</p>

            <Link to="#" active className="inline-block bg-gray-10">
                Read More
            </Link>
        </article>
    );
}
