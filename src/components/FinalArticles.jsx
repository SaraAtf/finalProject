
import { SharedSection } from '../shared/SharedSection'
import { ArticleCard } from '../components'
import { Row } from 'react-bootstrap'
import { articles } from '../models/articlesList'
export function FinalArticles() {
    return (
        <SharedSection title='المقالات الاخيره' className={'special_artist'} titleFormat={'mb-5'}>
            <Row className='g-3'>
                {articles.map( article =>
                (
                    <div key={article.id} className="col-md-3">
                        <ArticleCard {...article} />
                    </div>
                )
                )}
            </Row>
        </SharedSection>
    )
}
