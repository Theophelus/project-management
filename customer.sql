

create table customers (
    id serial not null PRIMARY KEY,
    first_name text not null,
    last_name text not null,
    phone int not null,
    email VARCHAR(255) not null,
    addresses VARCHAR(255) not null,
    city VARCHAR(255) not null
);

INSERT INTO customers(first_name, last_name, phone, email, addresses, city) VALUES('Anele Theophelus', 'Tom', 0817294056, 'aneletom10@gmail.com', '4 Kuyasa Crescent Cape Town', 'Cape Town');
INSERT INTO customers(first_name, last_name, phone, email, addresses, city) VALUES('Mbali', 'Klass', 0670266038, 'aneletom10@gmail.com', 'NY 79 Gugulethu', 'Cape Town');