import React, { useState } from "react";
import {
  PageBox,
  ContainerNav,
  Navbar,
  NavMenu,
  Logo,
  NavDot,
  Container,
  Left,
  Right,
  Card,
  CardHeader,
  CardMessage,
  Avatar,
  Name,
  Body,
  Content,
  UserImage
} from "./styles";
import LogoImagem from "../../assets/img/logo.png";
import DefaultUser from "../../assets/img/defaultuser.jpg";

export default function Timeline() {
  const [tweets, setTweets] = useState([]);

  return (
    <PageBox>
      <Navbar>
        <ContainerNav>
          <Logo src={LogoImagem} />
          <NavMenu>
            <NavDot />
            <NavDot />
            <NavDot />
          </NavMenu>
        </ContainerNav>
      </Navbar>
      <Container>
        <Left>
          <Card>
            <UserImage src={DefaultUser} />
            <Name>Nome</Name>
          </Card>
        </Left>
        <Right>
          <Card>
            <CardHeader>
              <Avatar src={DefaultUser} />
              <CardMessage
                multiline
                placeholder="Escreva o que você está pensando..."
              />
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Avatar src={DefaultUser} />
              <Name>@nome</Name>
            </CardHeader>
            <Body>
              <Content>
                {" "}
                Lorem ipsum mauris eros litora cursus feugiat, turpis varius
                fames etiam fermentum luctus, adipiscing sollicitudin et
                volutpat platea. aenean quisque senectus etiam fermentum primis
                vivamus in vivamus lacus, maecenas iaculis ultricies lectus est
                duis convallis potenti, cubilia interdum leo quis libero mollis
                feugiat sodales. commodo placerat ligula iaculis fringilla nibh
                mollis magna ac, interdum tortor mauris ullamcorper hendrerit
                nec inceptos orci, dui est imperdiet orci mauris dictum massa.
                pulvinar diam enim massa cursus hendrerit eu feugiat ligula
                etiam, ornare egestas maecenas consequat platea varius nisl
                faucibus ut, lacinia tellus sagittis justo fermentum habitant mi
                egestas.{" "}
              </Content>
            </Body>
          </Card>
        </Right>
      </Container>
    </PageBox>
  );
}
