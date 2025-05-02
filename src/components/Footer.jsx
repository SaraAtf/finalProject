import { Row } from 'react-bootstrap'
import { SharedSection } from '../shared/SharedSection'
export function Footer() {
    return (
        <SharedSection className={`footer text-light`}>

            <Row className='g-5'>
                <div className="col-md-4">
                    <h5>رواد الغناء العربى </h5>
                    <p className='footer_font'>منصة لتوثيق وحفظ تراث الموسيقى العربية الأصيلة وتعريف الأجيال الجديدة بروادها ومبدعيها.</p>
                </div>
                <div className="col-md-2">
                    <h5>روابط سريعه</h5>

                    <ul className='footerUl'>
                        <li>
                            <a href="">الرئيسيه</a>
                        </li>
                        <li>
                            <a href="">الرواد</a>
                        </li>
                        <li>
                            <a href="">الاكثر شهره</a>
                        </li>
                        <li>
                            <a href="">المقالات الاخيره</a>
                        </li>
                        <li>
                            <a href="">المدونه</a>
                        </li>


                    </ul>
                </div>
                <div className="col-md-2">
                    <h5>استكشف</h5>

                    <ul className='footerUl'>
                        <li>
                            <a href="">العصر الذهبى</a>
                        </li>
                        <li>
                            <a href="">الطرب الاصيل</a>
                        </li>
                        <li>
                            <a href=""> الاغانى الوطنيه</a>
                        </li>
                        <li>
                            <a href=""> القصائد الغنائيه</a>
                        </li>
                        <li>
                            <a href="">المرشحات الاندلسيه</a>
                        </li>


                    </ul>
                </div>
                <div className="col-md-4">
                    <h5>اشترك فى النشره البريديه</h5>
                    <p className='footer_font'>اخصل على اخر الاخبار والمقالات عن تراث الموسيقى العربيه </p>
                </div>
            </Row>
        </SharedSection>
    )
}
