

const SectionTittle = ({subTitle, title}) => {
    return (
        <div className="mx-auto text-center my-8 pb-8">
            <p className="mb-2 text-green-600 text-4xl font-[Caveat] tracking-wider">{subTitle}</p>
            <h2 className="font-extrabold text-6xl">{title}</h2>
        </div>
    );
};

export default SectionTittle;