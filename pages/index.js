import { Button, Box, Container, Heading, Image, Icon, Link, List, ListItem } from "@chakra-ui/react"
import { fira } from '../fonts'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from "../components/paragraph"
import NextLink from 'next/link'
import { BioSection, BioYear } from "../components/bio"
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const Page = () => {
    return <Container className={`${fira.className} antialiased`}>
      
        <Box display={{md: 'flex' }} mt={5}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Bryce English
                </Heading>
                <p>R&D Expert ( Software Engineer / Chemist / 3D Printing )</p>    
            </Box>
            <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
                <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/bryce.jpg" alt="Profile Image" />
            </Box>
        </Box>

        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                Background
            </Heading>
            <Paragraph>Bryce, a Utah-based entrepreneur and full-stack developer, thrives on solving unique challenges with innovative digital solutions. From meticulous planning and creative design to skilled coding, he tackles real-world problems effectively. Beyond work, Bryce enjoys the outdoors and specializes in crafting custom 3D resin-printed products for his entrepreneurial ventures.</Paragraph>
            <Box align="center" my={4}>
                <NextLink href="/projects">
                    <Button rightIcon={<ChevronRightIcon />} colorScheme="red">
                        My portfolio
                    </Button>
                </NextLink>
            </Box>
        </Section>

        <Section delay={0.2}>
            <Heading as="h3" variant="section-title" >
                Bio
            </Heading>
            <BioSection>
                <BioYear>2012</BioYear>
                Started quality work at UST Corp LLC.
            </BioSection>
            <BioSection>
                <BioYear>2017</BioYear>
                Analytical chemistry and R&D Formulator at Reckitt.
            </BioSection>
            <BioSection>
                <BioYear>2018</BioYear>
                Corning Life Sciences compliance specialist and ISO:13485 SME.
            </BioSection>
            <BioSection>
                <BioYear>2020</BioYear>
                Zarbees pasteurization SME and formulator for childrens OTC products.
            </BioSection>
            <BioSection>
                <BioYear>2021</BioYear>
                Completed the Bachelor&apos;s of Science program at Western Governors University for Software Development.
            </BioSection>
            <BioSection>
                <BioYear>2021</BioYear>
                PlanB Media 6 month startup experience.
            </BioSection>
            <BioSection>
                <BioYear>2022</BioYear>
                Returned to UST Corp LLC as a Software Developer SME for LIMS.
            </BioSection>
            <BioSection>
                <BioYear>2022-Current</BioYear>
                Entrepreneur/Engineer for 3D resin & filament printing.
            </BioSection>
        </Section>

        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                Interests and Hobbies
            </Heading>
            <Paragraph>
                Art, music, hiking, dirt/mountain biking, cooking, gardening.
            </Paragraph>
            <Paragraph>
                Interested in learning more about Bun, Firebase, and PWA development.
            </Paragraph>
        </Section>

        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                Socials
            </Heading>
            <List>
            <ListItem >
                    <Link href="https://www.linkedin.com/in/bryce-english-613048188/" target="_blank">
                        <Button variant="ghost" colorScheme="red" leftIcon={<Icon as={IoLogoLinkedin} />}>
                            @BryceEnglish
                        </Button>
                    </Link>
                </ListItem>
                <ListItem >
                    <Link href="https://github.com/BryceEnglish" target="_blank">
                        <Button variant="ghost" colorScheme="red" leftIcon={<Icon as={IoLogoGithub} />}>
                            @BryceEnglish
                        </Button>
                    </Link>
                </ListItem>
            </List>
        </Section>
    </Container>
}

export default Page
