import React, { useEffect, useState } from 'react';
import AccordionGroup from '../components/AccordionGroup/AccordionGroup';
import IconLogo from '../components/IconLogo/IconLogo';


export default function Jobs() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [jobList, setJobList] = useState<any[]>([]);

  useEffect(() => {
      const loadedData = JSON.parse(localStorage.getItem('jobs') ?? '[]');
      setJobList(loadedData);
      setLoaded(true);
  }, []);

  if (!loaded) return (<></>);

  return (
    <div className='w-full h-fit min-h-full bg-ricewhite-100 flex justify-center'>
        <IconLogo className='w-1/4 h-full' urlAddress='/Paradigmo_Logo.png'/>

        <div className='w-1/2 font-verdana max-[800px]:ml-14'>
            <div>
                <p className='text-7xl text-center mt-10 max-[800px]:text-4xl max-[800px]:mt-6'>Job Openings &#128188;</p>
                <p className='text-4xl text-center mt-16 mb-32 max-[800px]:text-3xl'>Post your resume and find your next job on Paradigmo!</p>
            </div>
            {jobList.length ? (
                    <AccordionGroup jobList={jobList} />
                ) : (
                    <div className='text-3xl text-center text-orange-400 max-[800px]:text-2xl'>
                        The search jobs did not match any jobs in our database :(
                    </div>
                )
            }
        </div>
        <div className='w-1/4 h-full'></div>
    </div>
  )
};
