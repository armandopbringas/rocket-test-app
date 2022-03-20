export default function ContactInfoData({ contactInfo }) {
  return (
    <div>
      {contactInfo.map(info => (
          <div>
            <span>{info.email}</span>
            <span>{info.phoneNumber}</span>
          </div>
        ))}
    </div>
  );
}