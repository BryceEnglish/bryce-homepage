import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
    return (
        <Layout title="Chef's List">
            <Container>
                <Title>
                    Chef&apos;s List <Badge>2021</Badge>
                </Title>
                <P>
                Easily create weekly meal plans using your personal recipes, and let the app automatically generate a consolidated shopping list. It intelligently combines quantities, ensuring you buy only what you need. Simplify your meal prep and shopping with Chef&apos;s List
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Android/iOS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React Native, SQL ROOM framework</span>
                    </ListItem>
                </List>
                <ProjectImage src="/images/projects/main.png" />
                <ProjectImage src="/images/projects/recipes.png" /> 
                <ProjectImage src="/images/projects/shoppinglist.png" />  
            </Container>
        </Layout>
    )

}

export default Project