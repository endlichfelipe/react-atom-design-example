import {IPerson} from "../../../../setup/models";
import {IDetailCardItemProps, ILinkDetailCardItemProps} from "./detail-card-item";
import ApartamentIcon from "@mui/icons-material/Apartment";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export class DetailCardItemBuilder {
  private readonly _person: Partial<IPerson>;
  private readonly _items: IDetailCardItemProps[] = [];

  constructor(person: Partial<IPerson>) {
    this._person = person;
  }

  public build(): IDetailCardItemProps[] {
    this.addCompany();
    this.addPosition();
    this.addAddress();
    this.addEmail();
    this.addPhone();
    return this._items;
  }

  private addCompany() {
    if (this._person.job?.company) {
      this._items.push({icon: <ApartamentIcon />, text: [this._person.job.company]});
    }
  }

  private addPosition() {
    let position;

    if (this._person.job?.jobTitle && this._person.job?.department)
      position = this._person.job.jobTitle + ' - ' + this._person.job.department;
    else
      position = this._person.job?.jobTitle ?? this._person.job?.department;

    if (position)
      this._items.push({ icon: <WorkIcon />, text: [position] });
  }

  private addAddress() {
    if (this._person.address) {
      const text: string[] = [];

      let addressLine1 = this._person.address?.street;
      if (this._person.address?.city)
        if (addressLine1)
          addressLine1 += ', ' + this._person.address?.city;
        else
          addressLine1 = this._person.address?.city;
      if (addressLine1)
        text.push(addressLine1);

      let addressLine2 = this._person.address?.state;
      if (this._person.address?.country)
        if (addressLine2)
          addressLine2 += ', ' + this._person.address?.country;
        else
          addressLine2 = this._person.address?.country;
      if (addressLine2)
        text.push(addressLine2);

      if (this._person.address.zipCode)
        text.push(this._person.address.zipCode);

      if (text.length > 0)
        this._items.push({ icon: <LocationOnIcon />, text: text });
    }
  }

  private addEmail() {
    if (this._person.emails && this._person.emails.length > 0)
      this._items.push({ icon: <MailIcon />, text: this._person.emails.map((email): ILinkDetailCardItemProps => ({
          link: `mailto:${email}`,
          value: email.address
        })), variant: "mailto" });
  }

  private addPhone() {
    if (this._person.phones && this._person.phones.length > 0)
      this._items.push({ icon: <LocalPhoneIcon />, text: this._person.phones.map((phone): ILinkDetailCardItemProps => ({
          link: phone.isWhatsapp ? 'https://wa.me/' + phone.number : undefined,
          value: phone.number
        })), variant: 'link' });
  }
}
