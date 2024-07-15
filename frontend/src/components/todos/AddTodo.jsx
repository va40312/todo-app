import { PlusOutlined } from "@ant-design/icons";
import { Button } from 'antd';
import { useState } from 'react';  // Import React and useState
import AddTodoCard from "./AddTodoCard";

const AddTodo = () => {
  const [isOpen, setIsOpen] = useState(false);  // Correctly use useState

  return (
    isOpen ? (
      <AddTodoCard setIsOpen={setIsOpen}/>
    ) : (
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => setIsOpen(true)}  // Add onClick handler to update isOpen state
      >
        Add todo
      </Button>
    )
  );
}

export default AddTodo;
