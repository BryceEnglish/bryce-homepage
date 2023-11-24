import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
    return (
        <Layout title="College Scheduling App">
            <Container>
                <Title>
                    College Scheduleing App <Badge>2020</Badge>
                </Title>
                <P>
                   React Native application for tracking college terms, classes, assessments, and mentors. Allows the user to email the mentor and take notes for each class.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Android/iOS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React Native, SQL ROOM Framework</span>
                    </ListItem>
                </List>
                <ProjectImage src="/images/projects/scheduleapp1.png" />
                <ProjectImage src="/images/projects/scheduleapp2.png" />
                <ProjectImage src="/images/projects/scheduleapp3.png" />     
            </Container>
        </Layout>
    )

}

export default Project