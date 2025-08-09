'use client'
import { useEffect, useState } from "react";

export default function PageWithLoading() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    const colors = ['#fdba74', '#fbbf24', '#f59e0b', '#f5970bff', '#ca8a04'];

    return (
        <div className="fixed inset-0 z-50 flex">
            {colors.map((c, i) => (
                <div
                    key={i}
                    style={{
                        backgroundColor: c,
                        transitionDelay: `${(4 - i) * 0.15}s`,
                    }}
                    className={`
            flex-1
            transition-transform duration-700 ease-in-out
            ${loading ? "translate-y-0" : "-translate-y-full"}
          `}
                ></div>
            ))}
        </div>
    );
}
