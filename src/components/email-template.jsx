const EmailTemplate = ({ title, description }) => (
    <div>
        <h1>Nueva tarea asignada: {title}</h1>
        <p>Descripción: {description}</p>
    </div>
);

export default EmailTemplate;
