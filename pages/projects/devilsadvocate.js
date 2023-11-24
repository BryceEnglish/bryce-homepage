import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
    return (
        <Layout title="Devil's Advocate">
            <Container>
                <Title>
                    Devil&apos;s Advocate <Badge>2021</Badge>
                </Title>
                <P>
                   Website and ecommerce site for our 3D products and soon to be home of our custom 1/3 BJD.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Next.js, Tailwind, PostgreSQL, Typescript</span>
                    </ListItem>
                </List>
                <ProjectImage src="/images/projects/da1.png"/>
                <ProjectImage src="/images/projects/da2.png" />    
            </Container>
        </Layout>
    )

}

export default Project