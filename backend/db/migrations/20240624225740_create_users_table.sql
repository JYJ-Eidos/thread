-- migrate:up
CREATE TABLE users (
  id INT AUTO_INCREMENT NOT NULL,
  nickname VARCHAR(20) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(200) NOT NULL,
  phone_number VARCHAR(11) NOT NULL,
  birthday DATE NULL,
  profile_image VARCHAR(1000) NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY(id),
  UNIQUE(nickname, email, phone_number),
  CONSTRAINT check_phone_number_length CHECK (CHAR_LENGTH(phone_number) = 11)
);

-- migrate:down
DROP TABLE users;