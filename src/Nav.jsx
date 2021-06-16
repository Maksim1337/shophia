import Nav from 'react-bootstrap/Nav';

const QuickLinks = ({ links, inlineFlex }) => {

  const navLinks = links.map(link => {
    // currently supports only font-awesome icons as links and pure strings (eg. Home, Gallery)
    const key = link?.props?.icon?.iconName ? link.props.icon.iconName : link;
    
    return (
      <Nav.Item key={key}>
        <Nav.Link eventKey={key}>{link}</Nav.Link>
      </Nav.Item>
    )
  })


  return (
    // Move to styled`component
    <Nav style={inlineFlex && {display: 'inline-flex'}}>
      {navLinks}
    </Nav>
  )
}


export { QuickLinks }
