import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import thumbChefsList from '../public/images/projects/thumbchefsList.png'
import thumbDevilsAdvocate from '../public/images/projects/thumbDevilsAdvocate.png'

const Projects = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Projects
            </Heading>

            <SimpleGrid columns={[1,1,2]}>
                <Section>
                    <ProjectGridItem id="chefslist" title="Chef's List" thumbnail={thumbChefsList}>
                        An app for managing weekly meal plans by assigning your stored recipes and then generating a shopping list for the week.
                    </ProjectGridItem>
                    <ProjectGridItem id="devilsadvocate" title="Devil's Advocate (formerly MoeFangBoutique)" thumbnail={thumbDevilsAdvocate}>
                        Custom 3D printing business that specializes in BJD parts and accessories. Currently working with the artist on creating our own BJD!
                    </ProjectGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Projects