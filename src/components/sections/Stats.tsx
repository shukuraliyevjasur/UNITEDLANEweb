export function Stats() {
    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
                        Built on reliability.<br />
                        Powered by people.
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                        Since our founding, United Lane has grown from a small operation into one of the most respected asset-based carriers in the Midwest. Our success is built on a simple principle: treat customers and drivers right, invest in technology, and never compromise on safety.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center sm:grid-cols-3">
                        {[
                            { id: 1, name: "Founded", value: "2006" },
                            { id: 2, name: "Trucks", value: "70+" },
                            { id: 3, name: "Miles Covered", value: "6M+" },
                        ].map((stat) => (
                            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base font-semibold leading-7 text-gray-600 uppercase tracking-widest">
                                    {stat.name}
                                </dt>
                                <dd className="order-first text-7xl font-extrabold tracking-tight text-red-600">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <div className="mt-24 h-px w-full bg-gray-200" />
            </div>
        </section>
    );
}
