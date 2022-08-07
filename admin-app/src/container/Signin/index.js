import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Input from '../../components/UI/Input';

const Signin = () => {
  return (
    <Layout>
      <Container>
        <Row style={{marginTop:"50px"}}>
          <Col md={{span:6,offset:3}}>
            <Form>
            <Input 
                    label='Email'
                    placeholder='Email Address'
                    value=''
                    type='email'
                    onChange={()=>{}}
                    >
                    </Input>

                    <Input 
                    label='Password'
                    placeholder='Password'
                    value=''
                    type='password'
                    onChange={()=>{}}
                    >
                    </Input>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signin;
