export interface PersonDto {
  person: {
    education: {
      certificate: string;
      university: string;
    };
    marriage: {
      married: boolean;
    };
    online_info: {
      email: string;
      ip_address: string;
      ipv6_address: string;
      password: string;
      password_md5: string;
      user_agent: string;
      username: string;
    };
    personal: {
      age: number;
      blood: string;
      born: null;
      born_place: string;
      cellphone: string;
      city: string;
      country: string;
      eye_color: string;
      father_name: string;
      gender: string;
      height: string;
      last_name: string;
      name: string;
      national_code: string;
      religion: string;
      system_id: string;
      weight: number;
    };
    work: {
      country_code: string;
      insurance: boolean;
      position: string;
      salary: string;
    };
  };
}
