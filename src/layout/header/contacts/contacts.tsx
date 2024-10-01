import {Phone} from "../../../assets/icons/phone";
import {Email} from "../../../assets/icons/email";
import {Whatsapp} from "../../../assets/icons/whatsapp";
import s from './contacts.module.scss'

export const Contacts = () => {
    return <div>
        <ul className={s.contactList}>
            <li className={s.contact}><a href="tel:+79869369848"><Phone/></a></li>
            <li className={s.contact}><a href="mailto:EKSEKON.RU@YANDEX.RU"><Email/></a></li>
            <li className={s.contact}><a
                href="https://wa.me/79869369848?text=%D0%9F%D0%B8%D1%88%D1%83%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20Eksekon.ru"><Whatsapp/></a>
            </li>

        </ul>
    </div>
}