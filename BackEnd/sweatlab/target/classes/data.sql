INSERT INTO exercise (name, image, muscular_group) VALUES
('Crunch abdominal', 'https://i.ibb.co/8DKrTcC/crunch-Abdominal.png', 'Abdominales'),
('Plancha', 'https://i.ibb.co/9Yty7wn/plancha-Abdominal.png', 'Abdominales'),
('Elevación de piernas', 'https://i.ibb.co/h7wXj33/elevacion-Piernas.png', 'Abdominales'),
('Mountain climbers', 'https://i.ibb.co/0KsT94G/mountain-Climbers.png', 'Abdominales'),
('Russian twist', 'https://i.ibb.co/X5qBwBM/russian-Twists.png', 'Abdominales'),
('Maquina de aductores', 'https://i.ibb.co/L165xKX/maquina-Adductor.png', 'Adductor'),
('Sentadillas con banda elástica', 'https://i.ibb.co/P5wKXMF/sentadilla-Banda.png', 'Adductor'),
('Prensa de piernas pies abiertos', 'https://i.ibb.co/BT0gVrf/prensa-Piernas.png', 'Adductor'),
('Curl de bíceps con barra', 'https://i.ibb.co/m4J08ft/curl-Biceps-Barra.png', 'Bíceps'),
('Curl de bíceps con mancuernas', 'https://i.ibb.co/Tv4HvVp/curl-Biceps-Mancuerna.png', 'Bíceps'),
('Martillo de bíceps', 'https://i.ibb.co/S35nccD/curl-Biceps-Martillo.png', 'Bíceps'),
('Curl con polea', 'https://i.ibb.co/S78hpCQ/curl-Biceps-Polea.png', 'Bíceps'),
('Sentadillas', 'https://i.ibb.co/yFbvrh4/sentadilla.png', 'Cuádriceps'),
('Prensa de piernas pies juntos', 'https://i.ibb.co/BT0gVrf/prensa-Piernas.png', 'Cuádriceps'),
('Zancadas', 'https://i.ibb.co/0VxndPb/zancadas.png', 'Cuádriceps'),
('Dominadas', 'https://i.ibb.co/K9CNt98/dominadas.png', 'Espalda'),
('Remo con barra', 'https://i.ibb.co/QY3FkQP/remo-Barra.png', 'Espalda'),
('Pulldown al pecho', 'https://i.ibb.co/kHZC55f/pull-Down-Pecho.png', 'Espalda'),
('Pulldown trasnuca', 'https://i.ibb.co/wg2hHBZ/pull-Down-Tras-Nuca.png', 'Espalda'),
('Elevación de talones sentado', 'https://i.ibb.co/Z2T5P7b/elevacion-Talones-Sentado.png', 'Gemelos'),
('Prensa de gemelos', 'https://i.ibb.co/BT0gVrf/prensa-Piernas.png', 'Gemelos'),
('Press militar', 'https://i.ibb.co/7SChnMs/militar-Press.png', 'Hombros'),
('Elevaciones laterales', 'https://i.ibb.co/4VFG0q4/elevacion-Lateral.png', 'Hombros'),
('Elevaciones frontales', 'https://i.ibb.co/mb5rjn0/elevacion-Frontal.png', 'Hombros'),
('Pájaros', 'https://i.ibb.co/VxsJYHF/pajaros.png', 'Hombros'),
('Peso muerto rumano', 'https://i.ibb.co/mb5rjn0/peso-Muerto.png', 'Femoral'),
('Curl de pierna sentado', 'https://i.ibb.co/KG1MrQB/femoral-Sentado.png', 'Femoral'),
('Sentadillas sumo', 'https://i.ibb.co/3yfvZYy/sentadilla-Sumo.png', 'Glúteos'),
('Sentadilla búlgara', 'https://i.ibb.co/mDHb46F/sentadilla-Bulgara.png', 'Glúteos'),
('Hip thrust', 'https://i.ibb.co/5cC1yww/hip-Thrust.png', 'Glúteos'),
('Patada de glúteo con polea', 'https://i.ibb.co/rsJRFW7/kickBack.png', 'Glúteos'),
('Press de banca', 'https://i.ibb.co/0qRq4Kr/press-Banca.png', 'Pecho'),
('Press inclinado', 'https://i.ibb.co/6vX3Ywk/press-Banca-Inclined.png', 'Pecho'),
('Press de tríceps en polea', 'https://i.ibb.co/rctMvG9/press-Frances.png', 'Tríceps'),
('Fondos en paralelas', 'https://i.ibb.co/dQvGFhr/fondos.png', 'Tríceps');



INSERT INTO app_user (name, last_name, email, password, date_of_birth, weight, height)
VALUES ('Laia', 'Clemente', 'clementecrespo.laia@gmail.com', '1234', '1990-01-29', 56.0, 163.0);

INSERT INTO app_routine (name, user_id)
VALUES ('Mi rutina 1', 1);

