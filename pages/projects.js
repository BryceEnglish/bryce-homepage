import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import thumbProject1 from '../public/images/projects/project1.png'
import thumbProject2 from '../public/images/projects/project2.png'
import thumbProject3 from '../public/images/projects/project3.png'

const Projects = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Projects
            </Heading>

            <SimpleGrid columns={[1,1,2]}>
                <Section>
                    <ProjectGridItem id="chefslist" title="Chef's List" thumbnail={thumbProject1}>
                        An app for managing weekly meal plans by assigning your stored recipes and then generating a shopping list for the week.
                    </ProjectGridItem>
                    <ProjectGridItem id="devilsadvocate" title="Devil's Advocate (formerly MoeFangBoutique)" thumbnail={thumbProject2}>
                        Custom 3D printing business that specializes in BJD parts and accessories. Currently working with the artist on creating our own BJD!
                    </ProjectGridItem>
                    <ProjectGridItem id="scheduleapp" title="College Scheduling App" thumbnail={thumbProject3}>
                        A college scheduling app developed with react native for tracking college terms, classes, assessments, and  mentors. Allows the user to email the mentor and take notes for each class.
                    </ProjectGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Projects