import TicketNum from "./TicketNum";
import "./Ticket.css";

export default function ticket({ ticket }) {
  return (
    <div className="Ticket">
      {ticket.map((num, idx) => (
        <TicketNum num={num} key={idx}></TicketNum>
      ))}
    </div>
  );
}
