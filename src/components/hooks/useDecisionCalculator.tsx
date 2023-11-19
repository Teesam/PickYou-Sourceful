import { useState, useEffect } from 'react';
import { useGlobalStore } from '../store/contextAPI';

interface CalculatedChoices {
    title: string;
    scores: number[];
}

const useDecisionCalculator = () => {
    const [calculatedChoices, setCalculatedChoices] = useState<CalculatedChoices[]>([]);
    const { choices, attributes } = useGlobalStore();

    useEffect(() => {
        const updatedCalculatedChoices = choices.map((choice) => {
            const title = choice.title;
            const scores: number[] = [];

            for (let j = 0; j < choice.attributes.length; j++) {
                scores.push(Number(choice.attributes[j].score) * Number(attributes[j].weight));
            }

            return {
                title: title,
                scores: scores,
            };
        });

        setCalculatedChoices(updatedCalculatedChoices);
    }, [choices, attributes]);

    return { calculatedChoices };
};

export default useDecisionCalculator;
