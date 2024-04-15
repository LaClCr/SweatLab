INSERT INTO exercise (name, image, muscular_group) VALUES
('Crunch abdominal', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/crunchAbdominal.png', 'Abdominales'),
('Plancha', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/planchaAbdominal.png', 'Abdominales'),
('Elevación de piernas', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/elevacionPiernas.png', 'Abdominales'),
('Mountain climbers', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/mountainClimbers.png', 'Abdominales'),
('Russian twist', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/russianTwists.png', 'Abdominales'),
('Maquina de aductores', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/maquinaAdductor.png', 'Adductor'),
('Sentadillas con banda elástica', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/sentadilla_Banda.png', 'Adductor'),
('Prensa de piernas pies abiertos', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/prensaPiernas.png', 'Adductor'),
('Curl de bíceps con barra', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/curlBiceps_Barra.png', 'Bíceps'),
('Curl de bíceps con mancuernas', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/curlBiceps_Mancuerna.png', 'Bíceps'),
('Martillo de bíceps', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/curlBiceps_Martillo.png', 'Bíceps'),
('Curl con polea', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/curlBiceps_Polea.png', 'Bíceps'),
('Sentadillas', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/sentadilla.png', 'Cuádriceps'),
('Prensa de piernas pies juntos', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/prensaPiernas.png', 'Cuádriceps'),
('Zancadas', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/zancadas.png', 'Cuádriceps'),
('Dominadas', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/dominadas.png', 'Espalda'),
('Remo con barra', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/remoBarra.png', 'Espalda'),
('Pulldown al pecho', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/pullDown_Pecho.png', 'Espalda'),
('Pulldown trasnuca', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/pullDown_TrasNuca.png', 'Espalda'),
('Elevación de talones sentado', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/elevacionTalones_Sentado.png', 'Gemelos'),
('Prensa de gemelos', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/prensaPiernas.png', 'Gemelos'),
('Press militar', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/militarPress.png', 'Hombros'),
('Elevaciones laterales', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/elevacionLateral.png', 'Hombros'),
('Elevaciones frontales', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/elevacionFrontal.png', 'Hombros'),
('Pájaros', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/pajaros.png', 'Hombros'),
('Peso muerto rumano', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/pesoMuerto.png', 'Femoral'),
('Curl de pierna sentado', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/femoralSentado.png', 'Femoral'),
('Sentadillas sumo', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/sentadillaSumo.png', 'Glúteos'),
('Sentadilla búlgara', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/sentadillaBulgara.png', 'Glúteos'),
('Hip thrust', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/hipThrust.png', 'Glúteos'),
('Patada de glúteo con polea', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/kickBack.png', 'Glúteos'),
('Press de banca', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/pressBanca.png', 'Pecho'),
('Press inclinado', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/pressBancaInclined.png', 'Pecho'),
('Press de tríceps en polea', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/tricepsPolea.png', 'Tríceps'),
('Fondos en paralelas', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/fondos.png', 'Tríceps'),
('Press francés', 'https://github.com/LaClCr/SweatLab/blob/images/Exercises_IMG/pressFrances.png', 'Tríceps');


INSERT INTO app_user (name, last_name, email, password, date_of_birth, weight, height)
VALUES ('Laia', 'Clemente', 'clementecrespo.laia@gmail.com', '1234', '1990-01-29', 56.0, 163.0);

INSERT INTO app_routine (name, user_id)
VALUES ('Mi rutina 1', 1);
