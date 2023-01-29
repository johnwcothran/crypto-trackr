import { MouseEvent, useMemo } from "react";
import { useRouter } from "next/router";

const intervals = {
    'm1': {
        label: 'Per Minute',
        value: 'm1'
    },
    'm30': {
        label: 'Per 30 Min',
        value: 'm30'
    },
    'h1': {
        label: 'Per Hour',
        value: 'h1'
    },
    'h6': {
        label: 'Per 6 Hours',
        value: 'h6'
    },
    'd1': {
        label: 'Per Day',
        value: 'd1'
    }
};

type Props = {
    cryptoSlug: string;
    interval: string | undefined;
}

export const ChartControls = ({ cryptoSlug, interval='d1' }: Props) => {
    const router = useRouter();
    const handleClick = useMemo(() => (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push(`/${cryptoSlug}?interval=${e.currentTarget.value}`, undefined, { scroll: false })
    }, []);
    return (
        <div>
            <ul className="nav nav-tabs flex flex-row flex-wrap list-none border-b-0 pl-0 mb-4">
                {Object.values(intervals).map(int => (
                    <li key={int.value} className="nav-item" role="presentation">
                        <button
                            onClick={handleClick}
                            value={int.value}
                            data-testid='crypto-history-chart-controls'
                            className={`
                                nav-link
                                block
                                font-medium
                                text-xs
                                leading-tight
                                uppercase
                                border-x-0 border-t-0 border-b-2 ${interval === int.value ? 'border-orange-400' : 'border-transparent'}
                                px-6
                                py-3
                                my-2
                                hover:${interval === int.value ? 'border-orange-400' : 'border-transparent'} hover:bg-gray-100
                                focus:${interval === int.value ? 'border-orange-400' : 'border-transparent'}`}
                            id={`chart-control-${int.value}`}
                            aria-controls={'chart-interval'} aria-selected={interval === int.value}>{int.label}</button>
                    </li>
                ))}
                
            </ul>
        </div>

    )
}