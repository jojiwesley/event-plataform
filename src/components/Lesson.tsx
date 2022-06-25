import { CheckCircle, Lock } from 'phosphor-react';
import { format, isPast } from 'date-fns'; 
//atribuindo os tipos de dados TypeScripty
interface LessonProps {
    title: string;
    slug: string;
    avaliableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {

    // isPast função que verifica se a data esta no passado ou no presente
    const isLassonAvailable = isPast(props.avaliableAt);
    // format função que formata a visulisação das datas
    const availableDataFormatted = format(props.avaliableAt, "EEE' • 'd' de 'MMM' • 'k'h'mm")
    return (
        <a href="#">
            <span className="text-gray-300">
                {availableDataFormatted}
            </span>
            <div className="rounded border border-gray-500 p-4 mt-2">
                <header className="flex items-center justify-between">
                    {isLassonAvailable ? (
                        <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
                            <Lock size={20} />
                            Em breve
                        </span>
                    )}
                    <span className="text-xs rounded py[0.125rem] px-2 text-white border border-green-300 font-bold">
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                <strong className="text-gray-200 mt-5 block">
                    {props.title}
                </strong>
            </div>
        </a>
    )
}