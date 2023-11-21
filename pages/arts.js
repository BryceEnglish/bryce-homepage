import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ArtGridItem } from '../components/grid-item'
import thumbArt1 from '../public/images/art/art1.jpg'
import thumbArt2 from '../public/images/art/art2.jpg'
import thumbArt3 from '../public/images/art/art3.jpg'
import thumbArt4 from '../public/images/art/art4.jpg'
import thumbArt5 from '../public/images/art/art5.jpg'


const Arts = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                My Art
            </Heading>

            <SimpleGrid columns={[1,1,1]} gap={0}>
                <Section>
                    <ArtGridItem id="art1" title="Why is he still here?" thumbnail={thumbArt1} />
                    <ArtGridItem id="art2" title="Smile?" thumbnail={thumbArt2} />
                    <ArtGridItem id="art3" title="That's a cat skull" thumbnail={thumbArt3} />
                    <ArtGridItem id="art4" title="H8 sun" thumbnail={thumbArt4} />
                    <ArtGridItem id="art5" title="MosquiBro" thumbnail={thumbArt5} />
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Arts