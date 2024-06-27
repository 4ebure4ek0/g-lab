import React, { useState } from 'react';
import TreeCheckbox from './TreeCheckbox';

// Функция для обновления состояния узла и всех его потомков
const updateNodeAndDescendants = (node, isChecked) => {
  node.checked = isChecked;
  node.indeterminate = false;
  if (node.categories) {
    node.categories.forEach(child => updateNodeAndDescendants(child, isChecked));
  }
};

// Функция для обновления состояния родительских узлов
const updateParentNodes = (nodes, path) => {
  if (path.length === 0) return;

  const [currentIndex, ...remainingPath] = path;
  const currentNode = nodes[currentIndex];

  if (remainingPath.length > 0) {
    updateParentNodes(currentNode.categories, remainingPath);
  }

  if (currentNode.categories) {
    const allChecked = currentNode.categories.every(child => child.checked);
    const someChecked = currentNode.categories.some(child => child.checked || child.indeterminate);

    currentNode.checked = allChecked;
    currentNode.indeterminate = someChecked && !allChecked;
  }
};

const Tree = ({ data }) => {
  const [treeData, setTreeData] = useState(data);

  const handleCheck = (path, isChecked) => {
    const newTreeData = [...treeData];

    // Рекурсивная функция для обновления состояния узлов по пути
    const updateNodesByPath = (nodes, path) => {
      const [currentIndex, ...remainingPath] = path;
      const currentNode = nodes[currentIndex];

      if (remainingPath.length === 0) {
        updateNodeAndDescendants(currentNode, isChecked);
      } else {
        updateNodesByPath(currentNode.categories, remainingPath);
      }
    };

    updateNodesByPath(newTreeData, path);
    updateParentNodes(newTreeData, path);

    setTreeData(newTreeData);
  };

  const renderTree = (nodes, path = []) => (
    <ul>
      {nodes.map((node, index) => (
        <li key={index}>
          <TreeCheckbox
            title={node.title}
            checked={node.checked || false}
            indeterminate={node.indeterminate || false}
            onChange={e => handleCheck([...path, index], e.target.checked)}
          />
          {node.categories && renderTree(node.categories, [...path, index])}
        </li>
      ))}
    </ul>
  );

  return <div>{renderTree(treeData)}</div>;
};

export default Tree;
