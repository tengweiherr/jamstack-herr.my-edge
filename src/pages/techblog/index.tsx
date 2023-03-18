import Loading from "@/components/Molecules/Loading"
import { fetchAllStories } from "@/utils/api/medium"
import { PageSubtitle, PageTitle, Section, TextContainer } from "@/utils/styled/common.styled"
import { NextConfig } from "next"
import dynamic from "next/dynamic"

export const config:NextConfig = { runtime: 'edge' }

type TechblogProps = {
    mediumRSSResInString: string
}

export async function getStaticProps() {

    const mediumRSSResInString = await fetchAllStories()
  
    return {
      props: {
        mediumRSSResInString
      },
      revalidate: 3628800
    }
}

const TechblogCardList = dynamic(() => import('../../components/Molecules/TechblogCardList'), {
    loading: () => <Loading />,
})

const Techblog = ({mediumRSSResInString}:TechblogProps) => {
    
    return (
        <Section className='py-5'>
            <TextContainer className='px-3'>
                <PageTitle>My tech blog</PageTitle>
                <PageSubtitle>Where I document what I&apos;ve learn and share them to others.</PageSubtitle>
            </TextContainer>
            <TechblogCardList mediumRSSResInString={mediumRSSResInString} />
        </Section>
    )
}

export default Techblog