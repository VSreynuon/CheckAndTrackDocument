import Button from "react-bootstrap/Button";

function CustomButton({ variant = "primary", size = "md", label, onClick, className }) {
  return (
    <Button variant={variant} size={size} onClick={onClick} className={className}>
      {label}
    </Button>
  
  );
}

export default CustomButton;
{/* <UniversalButton variant="success" size="lg" label="Submit" onClick={() => alert("Submitted!")} /> */}
