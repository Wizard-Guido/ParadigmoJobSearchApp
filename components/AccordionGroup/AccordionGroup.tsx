import AccordionItem from "../AccordionItem/AccordionItem";


export default function AccordionGroup({ jobList } : {jobList: any[]}) {
  return (
    <>
        {jobList?.slice(0, Math.min(4, jobList.length)).map(item => {
            const {id, jobTitle, jobDescription, location, companyName } = item;
            return (
                <AccordionItem 
                    key={id}
                    jobTitle={jobTitle} 
                    jobDescription={jobDescription}
                    location={location}
                    companyName={companyName}
                />
            )
        })}
    </>
  )
};
